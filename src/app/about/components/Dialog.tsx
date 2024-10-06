'use client';

import {
  Dialog as BaseDialog,
  IconButton,
} from '@/once-ui/components';
import { useState } from 'react';

export default function AboutCompanyDialog({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        data-border='rounded'
        variant='ghost'
        icon='helpCircle'
        tooltip='about'
        onClick={() => setOpen(true)}
      />
      <BaseDialog
        isOpen={open}
        title='About Company'
        onClose={() => setOpen(!open)}
      >
        {children}
      </BaseDialog>
    </>
  );
}
