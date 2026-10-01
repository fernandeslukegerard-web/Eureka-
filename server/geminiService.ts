import { GoogleGenAI } from '@google/genai';
import { StructuredAnimationSpec } from '../src/types/developer';
import { getStoredAISettings } from './developerStore';

// Initialize Gemini Client with environment key
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

interface GenerateAnimationParams {
  topicName: string;
  topicDescription: string;
  animationRequest: string;
  grade?: number;
  subject?: string;
}

export async function generateStructuredAnimation(
  params: GenerateAnimationParams
): Promise<StructuredAnimationSpec> {
  const { topicName, topicDescription, animationRequest, grade = 9, subject = 'Physics' } = params;
  const aiSettings = getStoredAISettings();

  const prompt = `
You are the lead STEM curriculum and animation architect for Eureka Science Lab.
Generate a structured, safe, interactive scientific animation specification for the following topic:

Topic Name: "${topicName}"
Subject: ${subject} (Grade ${grade})
Topic Description: "${topicDescription}"
Developer Animation Request: "${animationRequest}"

IMPORTANT REQUIREMENTS:
1. Do NOT generate executable JavaScript or HTML.
2. Produce ONLY a valid, structured JSON object that conforms strictly to the following TypeScript interface:

{
  "scene": {
    "theme": "aviation_hangar" | "laboratory" | "space_station" | "nature_field" | "mechanics_bay" | "quantum_chamber",
    "title": string (concise station title),
    "backgroundStyle": string,
    "primaryColor": string (hex code)
  },
  "objects": [
    {
      "id": string (unique alphanumeric),
      "name": string (descriptive apparatus name),
      "type": "gauge" | "instrument" | "slider" | "switch" | "meter" | "sensor" | "beaker" | "scale",
      "quantity": string (e.g., "Airspeed", "Barometric Pressure", "Temperature", "Voltage"),
      "initialValue": number,
      "targetValue": number,
      "min": number,
      "max": number,
      "step": number,
      "unit": string (e.g., "hPa", "knots", "°C", "V", "N", "kg"),
      "status": "pending" | "calibrated",
      "tooltip": string (scientific explanation of what this measures)
    }
  ],
  "interactions": [
    {
      "id": string,
      "targetObjectId": string (matching one object id),
      "label": string (action verb phrase, e.g. "Calibrate Altimeter to 1013 hPa"),
      "actionType": "calibrate" | "adjust" | "inspect" | "toggle" | "verify",
      "hint": string,
      "feedbackOnSuccess": string
    }
  ],
  "educationalHighlights": [
    {
      "concept": string (scientific concept or formula),
      "detail": string (concise explanation of why this measurement matters)
    }
  ],
  "successCriteria": {
    "requiredChecks": number (usually 2 or 3),
    "completionMessage": string (celebratory educational conclusion)
  }
}

Include 2 to 4 interactive objects, 2 to 3 verification interactions, and 2 educational highlights.
Return ONLY raw JSON without markdown code fences or backticks.
`;

  try {
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not configured on the server, using structured template fallback.');
      return getFallbackAnimationSpec(params);
    }

    const response = await ai.models.generateContent({
      model: aiSettings.model || 'gemini-3.8-flash',
      contents: prompt,
      config: {
        temperature: aiSettings.temperature ?? 0.7,
        maxOutputTokens: aiSettings.maxTokens ?? 2048,
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text?.trim() || '';
    // Strip any accidental markdown formatting
    const cleanedJson = responseText.replace(/^```json/i, '').replace(/^```/, '').replace(/```$/, '').trim();

    const parsed: StructuredAnimationSpec = JSON.parse(cleanedJson);

    // Validate required structural fields
    if (!parsed.scene || !Array.isArray(parsed.objects) || !Array.isArray(parsed.interactions)) {
      throw new Error('AI returned JSON missing essential schema fields');
    }

    return parsed;
  } catch (err: any) {
    console.warn('Gemini Animation Generation error, generating high-fidelity structured fallback:', err?.message || err);
    return getFallbackAnimationSpec(params);
  }
}

// Fallback structured animation generator for resilience
function getFallbackAnimationSpec(params: GenerateAnimationParams): StructuredAnimationSpec {
  const isAero = params.topicName.toLowerCase().includes('flight') || params.animationRequest.toLowerCase().includes('flight');
  const isThermal = params.topicName.toLowerCase().includes('thermal') || params.topicName.toLowerCase().includes('heat');
  const isCircuit = params.topicName.toLowerCase().includes('circuit') || params.topicName.toLowerCase().includes('electr');

  if (isAero) {
    return {
      scene: {
        theme: 'aviation_hangar',
        title: 'Pre-Flight Avionics & Physical Quantities Simulator',
        backgroundStyle: 'hangar_runway',
        primaryColor: '#2563eb'
      },
      objects: [
        {
          id: 'altimeter',
          name: 'Barometric Altimeter (Static Pressure)',
          type: 'gauge',
          quantity: 'Atmospheric Pressure',
          initialValue: 1000,
          targetValue: 1013,
          min: 950,
          max: 1050,
          step: 1,
          unit: 'hPa',
          status: 'pending',
          tooltip: 'Calibrate subscale barometric datum to standard sea level pressure 1013 hPa.'
        },
        {
          id: 'airspeed',
          name: 'Pitot Airspeed Gauge (Dynamic Pressure)',
          type: 'gauge',
          quantity: 'Indicated Airspeed',
          initialValue: 0,
          targetValue: 0,
          min: 0,
          max: 200,
          step: 5,
          unit: 'knots',
          status: 'calibrated',
          tooltip: 'Measures dynamic pressure q = 0.5 * rho * v^2 to indicate forward aircraft speed.'
        },
        {
          id: 'pitot_heater',
          name: 'Pitot Sensor Probe Heater',
          type: 'switch',
          quantity: 'Probe Power',
          initialValue: 0,
          targetValue: 1,
          min: 0,
          max: 1,
          step: 1,
          unit: 'state',
          status: 'pending',
          tooltip: 'Heats static ports to eliminate moisture and atmospheric ice crystallization.'
        }
      ],
      interactions: [
        {
          id: 'step_altimeter',
          targetObjectId: 'altimeter',
          label: 'Calibrate Altimeter to Standard Pressure (1013 hPa)',
          actionType: 'calibrate',
          hint: 'Adjust barometer subscale until 1013 hPa is aligned with the reference datum.',
          feedbackOnSuccess: 'Barometric altimeter calibrated to 1013 hPa.'
        },
        {
          id: 'step_heater',
          targetObjectId: 'pitot_heater',
          label: 'Engage Pitot Probe Thermal Anti-Ice Element',
          actionType: 'toggle',
          hint: 'Switch the probe heating switch to ACTIVE.',
          feedbackOnSuccess: 'Pitot sensor thermal anti-ice element verified operational.'
        }
      ],
      educationalHighlights: [
        {
          concept: 'Barometric Hydrostatic Relation',
          detail: 'Pressure variation with altitude follows ΔP = ρ·g·Δh. Accurately measuring sea-level standard (1013 hPa) ensures correct altitude separation.'
        },
        {
          concept: 'Dynamic vs Static Pressure',
          detail: 'Total pressure measured by the pitot tube minus ambient static pressure yields dynamic pressure, providing true calibrated airspeed.'
        }
      ],
      successCriteria: {
        requiredChecks: 2,
        completionMessage: 'All pre-flight avionics instruments calibrated and verified. Aircraft cleared for departure.'
      }
    };
  }

  // Default Scientific Apparatus Simulator
  return {
    scene: {
      theme: 'laboratory',
      title: `${params.topicName} — Measurement Station`,
      backgroundStyle: 'lab_bench',
      primaryColor: '#3b82f6'
    },
    objects: [
      {
        id: 'primary_gauge',
        name: 'Primary Precision Indicator',
        type: 'gauge',
        quantity: 'Physical Quantity',
        initialValue: 50,
        targetValue: 100,
        min: 0,
        max: 150,
        step: 5,
        unit: 'units',
        status: 'pending',
        tooltip: 'Regulate physical parameters to theoretical equilibrium value.'
      },
      {
        id: 'control_slider',
        name: 'Equilibrium Calibrator',
        type: 'slider',
        quantity: 'System Variable',
        initialValue: 20,
        targetValue: 50,
        min: 0,
        max: 100,
        step: 2,
        unit: 'scale',
        status: 'pending',
        tooltip: 'Adjust control variable until optimum system balance is achieved.'
      }
    ],
    interactions: [
      {
        id: 'calibrate_primary',
        targetObjectId: 'primary_gauge',
        label: 'Calibrate Primary Precision Indicator',
        actionType: 'calibrate',
        hint: 'Adjust indicator until nominal target value is reached.',
        feedbackOnSuccess: 'Indicator calibrated to nominal operating parameters.'
      },
      {
        id: 'verify_system',
        targetObjectId: 'control_slider',
        label: 'Align Equilibrium Calibrator',
        actionType: 'adjust',
        hint: 'Set control variable to the verified operating zone.',
        feedbackOnSuccess: 'System variable in equilibrium.'
      }
    ],
    educationalHighlights: [
      {
        concept: 'Scientific Measurement & Error Reduction',
        detail: 'Calibration against trusted reference standards eliminates systematic zero error and parallax inaccuracies.'
      }
    ],
    successCriteria: {
      requiredChecks: 2,
      completionMessage: 'Apparatus calibrated successfully according to standard scientific procedure.'
    }
  };
}
