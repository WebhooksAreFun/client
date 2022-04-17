import { AsideLayout } from "@pluralsight/ps-design-system-layout";
import React, { useState } from "react";
import { TableInstance } from "react-table";
import { FlexContainer, Paginator } from "./Paginator.component";
import { Webhook } from "./WebhookList.component";
import { WebhookPanel } from "./WebhookPanel.component";
import { WebhookTable } from "./WebhookTable.component";

export const WebhookPage: React.FC<{
  webhooks: Webhook[];
  table: TableInstance<Webhook>;
}> = ({ webhooks, table }) => {
  const [selectedWebhook, setSelectedWebhook] = useState(webhooks[0]);

  return (
    <AsideLayout
      aside={
        <AsideLayout.Aside>
          <WebhookPanel webhook={selectedWebhook} />
        </AsideLayout.Aside>
      }
      asidePosition={AsideLayout.asidePositions.last}
      main={
        <AsideLayout.Main>
          <div style={{ height: "calc(100vh - 48px)" }}>
            <WebhookTable
              webhooks={webhooks}
              setSelectedWebhook={setSelectedWebhook}
              table={table}
            />
            <FlexContainer>
              <Paginator table={table} />
            </FlexContainer>
          </div>
        </AsideLayout.Main>
      }
    />
  );
};
