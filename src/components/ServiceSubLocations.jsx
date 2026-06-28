import React from 'react';
import Link from 'next/link';

/** Location links shown below breadcrumb on parent service pages. */
export default function ServiceSubLocations({ links }) {
  if (!links?.length) return null;

  return (
    <nav className="service-sub-locations" aria-label="Service locations">
      <ul className="service-sub-locations__list">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="service-sub-locations__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
