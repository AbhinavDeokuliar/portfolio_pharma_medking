import * as Icons from 'lucide-react';

export default function LucideIcon({ name, ...props }) {
  const Icon = Icons[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
