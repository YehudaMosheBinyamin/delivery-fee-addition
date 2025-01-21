import React, { useState, type FC } from 'react';
import { Cell, Input,Button, EmptyState, Page, WixDesignSystemProvider } from '@wix/design-system';
import '@wix/design-system/styles.global.css';
import { dashboard } from '@wix/dashboard';
import { httpClient } from "@wix/essentials";
import { items, collections} from "@wix/data";
import { DataCollection } from '@wix/wix-ui-icons-common';
import { Http2ServerRequest } from 'http2';
let myData = 'Wait for loaded data...';

//necessary----------------------------------------------------------------------------------------------------------
// ---
/**let res = httpClient.fetchWithAuth(`${import.meta.env.BASE_API_URL}/extra-fees-api`);
Promise.resolve(res).then((res)=>{return res.text()}).then((str)=>{myData = str});
*/
async function main(){
//await httpClient.fetchWithAuth(`${import.meta.env.BASE_API_URL}/extra-fees-api`).then(res=>res.text());
let c = await fetch(`${import.meta.env.BASE_API_URL}/extra-fees-api`).then(res=>res.text());
return c;
}
const txt = await main();
myData = txt;
const DashboardPage: FC = () => {
    const [inputText, setInputText] = React.useState(
     myData
    );
  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Page>
        <Page.Header
          title="Extra Shipping Charges"
          subtitle="Change value in text box to edit"
          actionsBar={
                <Cell>
                <Input
                  value={inputText}
                  clearButton
                  onChange={(e) => setInputText(e.target.value)}
                  onClear={() => setInputText('')}
                />
            <Button
            onClick={()=>dashboard.openModal('39fde7d1-6407-4d83-a007-66bfbaf81b0c')}
            >Cost Change</Button>
                </Cell>
          }
        />
        <Page.Content>
          <EmptyState
            title=""
            subtitle=""
            theme="page"
          />
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
};

export default DashboardPage;
