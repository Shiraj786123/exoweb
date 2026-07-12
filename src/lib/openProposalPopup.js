export const PROPOSAL_POPUP_EVENT = 'vexoweb:open-proposal';

export function openProposalPopup(detail = {}) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(PROPOSAL_POPUP_EVENT, { detail }));
}
