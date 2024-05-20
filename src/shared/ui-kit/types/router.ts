import type { ButtonProps } from '@/shared/ui-kit/types/button'

export interface RouterProps {
  to: string,
}

export interface NavButtonProps extends ButtonProps, RouterProps {}