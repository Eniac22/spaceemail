import { HotkeyProviderWrapper } from '@/components/providers/hotkey-provider-wrapper';
import { OnboardingWrapper } from '@/components/onboarding';
import { VoiceProvider } from '@/providers/voice-provider';
import { NotificationProvider } from '@/components/party';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { Outlet, useLoaderData } from 'react-router';
import type { Route } from './+types/layout';

export default function MailLayout() {
  return (
    // <VoiceProvider>
    <HotkeyProviderWrapper>
      <AppSidebar />
      <div className="bg-sidebar dark:bg-sidebar w-full">
        <Outlet />
      </div>
      <OnboardingWrapper />
      <NotificationProvider />
    </HotkeyProviderWrapper>
    // </VoiceProvider>
  );
}
