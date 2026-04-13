'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';

export type OtherNavItem = {
  name: string;
  href: string;
};

type NavOtherMenuProps = {
  items: OtherNavItem[];
  variant: 'desktop' | 'mobile';
  onNavigate?: () => void;
};

export default function NavOtherMenu({
  items,
  variant,
  onNavigate,
}: NavOtherMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onDocMouseDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, close]);

  const handleToggle = () => {
    setOpen((v) => !v);
  };

  const linkClassDesktop =
    'block px-4 py-2 text-sm font-medium text-slate-800 dark:text-gray-100 hover:bg-slate-100 dark:hover:bg-gray-700 rounded-md transition-colors';
  const linkClassMobile =
    'block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors';

  if (variant === 'mobile') {
    return (
      <div className="border-t border-gray-100 dark:border-gray-800 pt-1 mt-1">
        <button
          type="button"
          ref={buttonRef}
          onClick={handleToggle}
          className="flex w-full items-center justify-between px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          aria-expanded={open}
          aria-controls={menuId}
          id={`${menuId}-trigger-mobile`}
        >
          <span>Other</span>
          <svg
            className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div
            id={menuId}
            role="region"
            aria-labelledby={`${menuId}-trigger-mobile`}
            className="pl-2 flex flex-col gap-0.5 pb-1"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassMobile}
                onClick={() => {
                  close();
                  onNavigate?.();
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        ref={buttonRef}
        onClick={handleToggle}
        className="inline-flex items-center gap-1 text-sm font-medium hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        id={`${menuId}-trigger`}
      >
        Other
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 top-full z-50 mt-2 min-w-[12rem] rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className={linkClassDesktop}
              onClick={() => {
                close();
                onNavigate?.();
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
