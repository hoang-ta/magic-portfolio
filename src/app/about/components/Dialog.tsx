'use client';

import { Dialog as BaseDialog } from '@/once-ui/components';
import { useState } from 'react';

export default function Dialog() {
  const [open, setOpen] = useState(true);

  return (
    <BaseDialog
      isOpen={open}
      title='Dialog Title'
      onClose={() => setOpen(!open)}
    >
      <p>This is the content of the dialog.</p>
    </BaseDialog>
  );
}
