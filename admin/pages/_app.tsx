import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-nestjsx-crud";
import "@pankod/refine-antd/dist/reset.css";
import { AntdInferencer } from "@pankod/refine-inferencer/antd";
import { appWithTranslation, useTranslation } from "next-i18next";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { ColorModeContextProvider } from "@contexts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";
import { authProvider } from "src/authProvider";

const API_URL = "https://api.nestjsx-crud.refine.dev";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <ColorModeContextProvider>
      <RefineKbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "posts",
              list: AntdInferencer,
              edit: AntdInferencer,
              show: AntdInferencer,
              create: AntdInferencer,
              canDelete: true,
            },
            {
              name: "users",
              list: AntdInferencer,
              edit: AntdInferencer,
              show: AntdInferencer,
              create: AntdInferencer,
              canDelete: true,
            },
          ]}
          Title={Title}
          Header={Header}
          Sider={Sider}
          Footer={Footer}
          Layout={Layout}
          OffLayoutArea={OffLayoutArea}
          authProvider={authProvider}
          LoginPage={AuthPage}
          i18nProvider={i18nProvider}
        >
          <Component {...pageProps} />
        </Refine>
      </RefineKbarProvider>
    </ColorModeContextProvider>
  );
}

export default appWithTranslation(MyApp);
