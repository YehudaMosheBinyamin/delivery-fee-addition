import React, { useState, type FC } from 'react';
import { Cell, Input,Button, EmptyState, Page, WixDesignSystemProvider } from '@wix/design-system';
import '@wix/design-system/styles.global.css';
import { dashboard } from '@wix/dashboard';
import { httpClient } from "@wix/essentials";
import { items, collections} from "@wix/data";
import { DataCollection } from '@wix/wix-ui-icons-common';
//import { local } from "wix-storage-frontend";
/**let collection3 :DataCollection= new DataCollection({
  _id: '123',
  fields: {
    key: 'cost',
    type: 'TEXT'
  },
  permissions: {
    insert: 'ADMIN',
    remove: 'ADMIN',
    read: 'ADMIN',
    update: 'ADMIN'
  }
});
collections.createDataCollection({collection: collection3});*/
//let newCol : Partial<collections.DataCollection>;
//newCol = {
  //_id: '123',
 // fields: Array<Field>(
   // key: 'cost',
   // type: 'TEXT'
 // )//,
  //permissions: {
    //insert: 'ADMIN',
    //remove: 'ADMIN',
    //read: 'ADMIN',
    //update: 'ADMIN'
  //}
//};
//collections.createDataCollection(newCol);
//type DeliveryFee  = {
//  feeName: string,
 // price: string
//}
console.log("BBEEEEEEEEEEEp");
//necessary-------------------------------------------------------------------------------------------------------------
//let result = await httpClient.fetchWithAuth(`${import.meta.env.BASE_API_URL}/extra-fees-api`);
//result.text().then((s)=>{console.log("ddd")});
let result = await httpClient.fetchWithAuth(`${import.meta.env.BASE_API_URL}/extra-fees-api`);
let text = await result.json();
console.log(text);
//const result = await response;
//console.log(result);
//response.text().then((str)=>{console.log(str)});
console.log("BBEEEEEEEEEגEEp");
//const data2 = await response.text; WAS!!!!!!!!!!!!!!!!!!!!!!
const data2 = "33";
//const data = "6";
//let  fee1:DeliveryFee = {feeName:"deliv",price:"5"};
const DashboardPage: FC = () => {
    const [inputText, setInputText] = React.useState(
      //data
      data2
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
