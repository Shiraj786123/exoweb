const PROCESS_COLORS = ['#2563eb', '#16a34a', '#9333ea', '#ea580c', '#2563eb', '#16a34a'];

const WEB_ICONS = ['discovery', 'plan', 'design', 'code', 'test', 'rocket'];
const SEO_ICONS = ['audit', 'competitor', 'keyword', 'optimise', 'content', 'monitor'];

function inferVariant(steps) {
  const first = steps[0]?.title?.toLowerCase() || '';
  if (first.includes('audit')) return 'seo';
  return 'web';
}

function guessIcon(title, index, variant) {
  const t = title.toLowerCase();
  if (t.includes('audit')) return 'audit';
  if (t.includes('competitor')) return 'competitor';
  if (t.includes('keyword')) return 'keyword';
  if (t.includes('optim')) return 'optimise';
  if (t.includes('content')) return 'content';
  if (t.includes('monitor')) return 'monitor';
  if (t.includes('consult') || t.includes('discovery')) return 'discovery';
  if (t.includes('plan') || t.includes('strategy')) return 'plan';
  if (t.includes('design')) return 'design';
  if (t.includes('develop')) return 'code';
  if (t.includes('test')) return 'test';
  if (t.includes('launch') || t.includes('deploy')) return 'rocket';
  if (t.includes('support')) return 'support';
  const icons = variant === 'seo' ? SEO_ICONS : WEB_ICONS;
  return icons[index] || icons[0];
}

/** Map city / legacy process steps to ServiceProcessSection format. */
export function normalizeCityProcessSteps(steps, variant) {
  if (!steps?.length) return [];

  const resolvedVariant = variant || inferVariant(steps);

  return steps.map((step, index) => {
    const base = {
      step: step.step || index + 1,
      title: step.title,
      color: step.color || PROCESS_COLORS[index % PROCESS_COLORS.length],
      icon: step.icon || guessIcon(step.title, index, resolvedVariant),
    };

    if (step.description) {
      return { ...base, description: step.description };
    }

    if (step.lines?.length) {
      return { ...base, description: step.lines.join(' ') };
    }

    return base;
  });
}
