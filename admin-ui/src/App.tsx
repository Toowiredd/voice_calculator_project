import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ParsedKeywordList } from "./parsedKeyword/ParsedKeywordList";
import { ParsedKeywordCreate } from "./parsedKeyword/ParsedKeywordCreate";
import { ParsedKeywordEdit } from "./parsedKeyword/ParsedKeywordEdit";
import { ParsedKeywordShow } from "./parsedKeyword/ParsedKeywordShow";
import { DetectedContextList } from "./detectedContext/DetectedContextList";
import { DetectedContextCreate } from "./detectedContext/DetectedContextCreate";
import { DetectedContextEdit } from "./detectedContext/DetectedContextEdit";
import { DetectedContextShow } from "./detectedContext/DetectedContextShow";
import { ParsedNumberList } from "./parsedNumber/ParsedNumberList";
import { ParsedNumberCreate } from "./parsedNumber/ParsedNumberCreate";
import { ParsedNumberEdit } from "./parsedNumber/ParsedNumberEdit";
import { ParsedNumberShow } from "./parsedNumber/ParsedNumberShow";
import { UserCommandList } from "./userCommand/UserCommandList";
import { UserCommandCreate } from "./userCommand/UserCommandCreate";
import { UserCommandEdit } from "./userCommand/UserCommandEdit";
import { UserCommandShow } from "./userCommand/UserCommandShow";
import { DetectedNumberList } from "./detectedNumber/DetectedNumberList";
import { DetectedNumberCreate } from "./detectedNumber/DetectedNumberCreate";
import { DetectedNumberEdit } from "./detectedNumber/DetectedNumberEdit";
import { DetectedNumberShow } from "./detectedNumber/DetectedNumberShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"voice calcullator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ParsedKeyword"
          list={ParsedKeywordList}
          edit={ParsedKeywordEdit}
          create={ParsedKeywordCreate}
          show={ParsedKeywordShow}
        />
        <Resource
          name="DetectedContext"
          list={DetectedContextList}
          edit={DetectedContextEdit}
          create={DetectedContextCreate}
          show={DetectedContextShow}
        />
        <Resource
          name="ParsedNumber"
          list={ParsedNumberList}
          edit={ParsedNumberEdit}
          create={ParsedNumberCreate}
          show={ParsedNumberShow}
        />
        <Resource
          name="UserCommand"
          list={UserCommandList}
          edit={UserCommandEdit}
          create={UserCommandCreate}
          show={UserCommandShow}
        />
        <Resource
          name="DetectedNumber"
          list={DetectedNumberList}
          edit={DetectedNumberEdit}
          create={DetectedNumberCreate}
          show={DetectedNumberShow}
        />
      </Admin>
    </div>
  );
};

export default App;
