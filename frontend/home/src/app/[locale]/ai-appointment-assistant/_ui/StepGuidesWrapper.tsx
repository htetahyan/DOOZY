import { StepGuides } from './StepGuides';

interface StepGuidesWrapperProps {
  t: any;
}

export function StepGuidesWrapper({ t }: StepGuidesWrapperProps) {
  // Pre-process the translations data
  const stepGuidesData = {
    title: t('step_guides.title'),
    steps: t.raw('step_guides.steps')
  };

  return <StepGuides data={stepGuidesData} />;
} 