'use client';

import { openProposalPopup } from '../../lib/openProposalPopup';

const ProposalCtaButton = ({ className, children, service, ...props }) => (
  <button
    type="button"
    className={className}
    onClick={() => openProposalPopup(service ? { service } : {})}
    {...props}
  >
    {children}
  </button>
);

export default ProposalCtaButton;
