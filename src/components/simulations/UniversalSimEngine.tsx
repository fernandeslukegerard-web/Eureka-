import React from 'react';
import { Subtopic } from '../../types';
import { FlightPrecheckSim } from './FlightPrecheckSim';
import { MotionTrackSim } from './MotionTrackSim';
import { SpaceLiftingSim } from './SpaceLiftingSim';
import { FloatSinkSim } from './FloatSinkSim';
import { AircraftFlightSim } from './AircraftFlightSim';
import { WaveGeneratorSim } from './WaveGeneratorSim';
import { ThermalParticleSim } from './ThermalParticleSim';
import { ElectricCircuitSim } from './ElectricCircuitSim';
import { OpticsLaserSim } from './OpticsLaserSim';
import { NuclearRadiationSim } from './NuclearRadiationSim';
import { ChemicalReactionSim } from './ChemicalReactionSim';
import { AcidBaseTitrationSim } from './AcidBaseTitrationSim';
import { AtomicStructureSim } from './AtomicStructureSim';
import { CellMicroscopeSim } from './CellMicroscopeSim';
import { OsmosisPotatoSim } from './OsmosisPotatoSim';
import { EnzymeActiveSiteSim } from './EnzymeActiveSiteSim';
import { HeartCirculationSim } from './HeartCirculationSim';
import { LeverFulcrumSim } from './LeverFulcrumSim';
import { EconMarketSim } from './EconMarketSim';
import { LogicGateSim } from './LogicGateSim';
import { UniversalStructuredAnimation } from './UniversalStructuredAnimation';

interface UniversalSimEngineProps {
  subtopic: Subtopic;
  onComplete: () => void;
}

export const UniversalSimEngine: React.FC<UniversalSimEngineProps> = ({
  subtopic,
  onComplete
}) => {
  // If this subtopic has an AI-generated structured animation specification, render it
  if (subtopic.animationSpec) {
    return <UniversalStructuredAnimation spec={subtopic.animationSpec} onComplete={onComplete} />;
  }

  const id = subtopic.id.toLowerCase();
  const expType = (subtopic.experience?.interactiveType || subtopic.experience?.type || '').toLowerCase();
  const title = (subtopic.experience?.title || subtopic.title || '').toLowerCase();
  const concept = (subtopic.academicConcept || subtopic.lesson?.academicConcept || '').toLowerCase();

  // 1. Length, time, measurement & Pre-flight gauges
  if (
    id === 'phys_1_1' ||
    id === 'physics_1_1' ||
    expType === 'measure_flight_gauge' ||
    expType === 'aircraft_preflight' ||
    title.includes('pre-flight measurement') ||
    title.includes('vernier') ||
    title.includes('caliper') ||
    title.includes('micrometer') ||
    title.includes('length and time')
  ) {
    return <FlightPrecheckSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 2. Motion, Speed, Acceleration Track
  if (
    id === 'phys_1_2' ||
    id === 'physics_1_2' ||
    expType === 'motion_track' ||
    expType === 'racing_track' ||
    title.includes('racing') ||
    title.includes('motion') ||
    title.includes('speed challenge') ||
    title.includes('acceleration')
  ) {
    return <MotionTrackSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 3. Mass vs. Weight: Space-station lifting challenge
  if (
    id === 'phys_1_3' ||
    id === 'physics_1_3' ||
    expType === 'space_lifting' ||
    title.includes('mass and weight') ||
    title.includes('space-station') ||
    title.includes('lifting challenge') ||
    title.includes('gravitational field') ||
    concept.includes('w = mg') ||
    concept.includes('mass is the measure of the quantity of matter')
  ) {
    return <SpaceLiftingSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 4. Density & Buoyancy Tank: Float or Sink
  if (
    id === 'phys_1_4' ||
    id === 'physics_1_4' ||
    expType === 'density_tank' ||
    expType === 'float_or_sink' ||
    title.includes('density') ||
    title.includes('float') ||
    title.includes('sink')
  ) {
    return <FloatSinkSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 5. Aircraft Aerodynamics & Flight Forces
  if (
    id === 'phys_1_5' ||
    id === 'physics_1_5' ||
    title.includes('flight') ||
    title.includes('aerodynamics') ||
    title.includes('thrust') ||
    title.includes('drag') ||
    title.includes('lift') ||
    title.includes('aircraft')
  ) {
    return <AircraftFlightSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 6. Waves, Sound, Frequency & Oscillations
  if (
    id.startsWith('phys_3') ||
    id.startsWith('physics_3') ||
    id.includes('wave') ||
    expType.includes('wave') ||
    title.includes('wave') ||
    title.includes('sound') ||
    title.includes('frequency') ||
    title.includes('echo')
  ) {
    return <WaveGeneratorSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 7. Thermal Physics, Kinetic Particle Theory & States of Matter
  if (
    id.startsWith('phys_2') ||
    id.startsWith('physics_2') ||
    id.includes('thermal') ||
    expType.includes('thermal') ||
    expType.includes('freeze') ||
    title.includes('thermal') ||
    title.includes('particle') ||
    title.includes('temperature') ||
    title.includes('heat') ||
    title.includes('kinetic molecular')
  ) {
    return <ThermalParticleSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 8. Electricity, Magnetism & DC Circuits
  if (
    id.startsWith('phys_4') ||
    id.startsWith('physics_4') ||
    id.includes('circuit') ||
    id.includes('electric') ||
    expType.includes('circuit') ||
    expType.includes('electric') ||
    title.includes('circuit') ||
    title.includes('electricity') ||
    title.includes('ohm') ||
    title.includes('power grid') ||
    title.includes('resistor')
  ) {
    return <ElectricCircuitSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 9. Optics, Light Rays & Laser Refraction
  if (
    title.includes('light') ||
    title.includes('laser') ||
    title.includes('refract') ||
    title.includes('prism') ||
    title.includes('lens') ||
    title.includes('reflection') ||
    title.includes('optics')
  ) {
    return <OpticsLaserSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 10. Nuclear Radiation, Radioactivity & GM Tube
  if (
    id.startsWith('phys_5') ||
    id.startsWith('physics_5') ||
    id.includes('nuclear') ||
    id.includes('decay') ||
    title.includes('radiation') ||
    title.includes('nuclear') ||
    title.includes('decay') ||
    title.includes('geiger') ||
    title.includes('half-life') ||
    title.includes('alpha') ||
    title.includes('beta') ||
    title.includes('gamma')
  ) {
    return <NuclearRadiationSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 11. Chemistry: Atomic Structure & Electron Shells
  if (
    id === 'chem_ch3' ||
    id === 'chemistry_3_1' ||
    title.includes('atom') ||
    title.includes('proton') ||
    title.includes('electron') ||
    title.includes('periodic table') ||
    title.includes('isotope') ||
    title.includes('rutherford')
  ) {
    return <AtomicStructureSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 12. Chemistry: Acid-Base Neutralization & Titration
  if (
    id.includes('acid') ||
    title.includes('acid') ||
    title.includes('base') ||
    title.includes('titrat') ||
    title.includes('neutraliz') ||
    title.includes('ph')
  ) {
    return <AcidBaseTitrationSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 13. Chemistry: Chemical Reaction Kinetics & Catalysts
  if (
    id.startsWith('chem') ||
    id.startsWith('chemistry') ||
    expType.includes('reaction') ||
    title.includes('reaction') ||
    title.includes('catalyst') ||
    title.includes('mole') ||
    title.includes('rate of reaction') ||
    title.includes('combustion')
  ) {
    return <ChemicalReactionSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 14. Biology: Cell Structure & Microscopy
  if (
    id.startsWith('bio_1') ||
    id.startsWith('bio_2') ||
    id.startsWith('biology_1') ||
    id.startsWith('biology_2') ||
    title.includes('cell structure') ||
    title.includes('microscope') ||
    title.includes('organelle') ||
    title.includes('plant cell') ||
    title.includes('animal cell')
  ) {
    return <CellMicroscopeSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 15. Biology: Osmosis, Diffusion & Movement
  if (
    id.startsWith('bio_3') ||
    id.startsWith('biology_3') ||
    title.includes('osmosis') ||
    title.includes('diffusion') ||
    title.includes('movement in and out') ||
    title.includes('visking') ||
    title.includes('water potential')
  ) {
    return <OsmosisPotatoSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 16. Biology: Enzyme Kinetics & Active Site
  if (
    id.startsWith('bio_5') ||
    id.startsWith('biology_5') ||
    title.includes('enzyme') ||
    title.includes('active site') ||
    title.includes('lock and key') ||
    title.includes('denatur')
  ) {
    return <EnzymeActiveSiteSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 17. Biology: Human Heart & Cardiovascular Circulation
  if (
    id.includes('circulat') ||
    id.includes('heart') ||
    title.includes('heart') ||
    title.includes('circulation') ||
    title.includes('cardiac') ||
    title.includes('blood')
  ) {
    return <HeartCirculationSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 18. Biology fallback (for genetics, reproduction, ecology): Cell/Microscope or Enzyme
  if (id.startsWith('bio') || id.startsWith('biology')) {
    if (title.includes('plant') || title.includes('leaf') || title.includes('photosynthesis')) {
      return <CellMicroscopeSim subtopic={subtopic} onComplete={onComplete} />;
    }
    return <CellMicroscopeSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 19. Simple Machines: Levers, Moments, Pulleys
  if (
    id.startsWith('gs_') ||
    expType.includes('lever') ||
    title.includes('lever') ||
    title.includes('moment') ||
    title.includes('machine') ||
    title.includes('fulcrum')
  ) {
    return <LeverFulcrumSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 20. Economics, Accounting & Business Market Equilibrium
  if (
    id.startsWith('econ') ||
    id.startsWith('bus') ||
    id.startsWith('acc') ||
    expType.includes('market') ||
    expType.includes('breakeven') ||
    title.includes('pricing') ||
    title.includes('market') ||
    title.includes('equilibrium') ||
    title.includes('profit') ||
    title.includes('food truck')
  ) {
    return <EconMarketSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // 21. Computer Science: Logic Gates, Boolean Interlocks, Digital
  if (
    id.startsWith('cs') ||
    expType.includes('gate') ||
    title.includes('logic') ||
    title.includes('gate') ||
    title.includes('subway') ||
    title.includes('binary')
  ) {
    return <LogicGateSim subtopic={subtopic} onComplete={onComplete} />;
  }

  // Fallback for general physics forces
  return <MotionTrackSim subtopic={subtopic} onComplete={onComplete} />;
};
