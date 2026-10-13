import { useEffect } from 'react';
import { SITE } from '../config.js';

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | Sales Enablement Consulting & LinkedIn Lead Generation`;
    if (description) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', description);
    }
  }, [title, description]);
}
