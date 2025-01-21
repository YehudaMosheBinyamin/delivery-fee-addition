import React, { type FC } from 'react';
import { Button, EmptyState, Page, WixDesignSystemProvider } from '@wix/design-system';
import '@wix/design-system/styles.global.css';
import { dashboard } from '@wix/dashboard';
const DashboardPage: FC = () => {
  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Page>
        <Page.Header
          title="Dashboard1"
          subtitle="This is a subtitle for your page"
          actionsBar={
            <Button>
              onClick={()=>dashboard.openModal('d0269393-69d0-494b-846b-8528ddfe47cb')};
            </Button>
          }
        />
        <Page.Content>
          <EmptyState
            title="Dashboard"
            subtitle="Edit src\dashboard\pages\dashboard\page.tsx to change this text."
            theme="page"
          />
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
};

export default DashboardPage;
