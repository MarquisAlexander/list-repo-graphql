<h2 align="center">
  Plano do projeto.
</h2> 

<p align="center">
  <a href="#tecnologias">🛠 Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#informacoes">📚 Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">📱 Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-rodar">💡 Como rodar</a>
</p>

<h2 id="tecnologias">🛠 Tecnologias</h2>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactNative](https://reactnative.dev/)
  - [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/docs/react/integrations/react-native/)

<h2 id="informacoes">📚 Informações</h2>

Aplicativo para pesquisar usuários do GitHub e visualizar os repositórios pertencentes a cada conta, permitindo que você favorite qualquer repositório na sua lista pessoal.

<h2 id="layout">📱 Layout</h2>

<p align="center">
  <img src="https://github.com/user-attachments/assets/84937379-c490-4da5-a2f3-92b004ac67b3" width="200" />
  <img src="https://github.com/user-attachments/assets/d6ef18ee-00da-4674-be11-c9b43c960138" width="200" />
  <img src="https://github.com/user-attachments/assets/dabf88ab-3d60-4767-ae05-97f12bc34705" width="200" />
  <img src="https://github.com/user-attachments/assets/bfa198ac-4f9d-47e7-96fb-224006b90597" width="200" />
  <img src="https://github.com/user-attachments/assets/e44fb562-1111-43ae-92bc-167aa3adc644" width="200" />
</p>

<h2 id="como-rodar">💡 Como rodar</h2>

Antes de mais nada, você precisará de um token do GitHub. Caso não saiba como obtê-lo, siga este guia oficial.

Com o token em mãos, abra o arquivo **src\services\api.js** e substitua **KEY_GITHUB** pelo seu token.

Depois disso, siga o fluxo padrão para executar o projeto.

---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
