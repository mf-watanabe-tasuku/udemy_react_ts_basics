import { type PropsWithChildren } from "react";

type InfoBoxProps = PropsWithChildren<{
  mode: 'hint' | 'warning';
  severity?: 'low' | 'medium' | 'high';
}>;

export default function InfoBox({ mode, severity, children }: InfoBoxProps) {
  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === 'warning' ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  );
}
