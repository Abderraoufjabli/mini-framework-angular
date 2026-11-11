// ============================================================
// app.js — Le composant racine
// ============================================================

const AppComponent = {
  name: 'AppComponent',
  selector: 'app-root',
  template: `<h1>Hello depuis mon mini Angular framework!</h1>`,
  styles: [`
    h1 {
      color: blue;
    }
  `],
  state: {
    message: 'Bonjour !'
  }
};

// 5. On démarre l'app ICI (dans app.js, pas dans core.js)
bootstrapApp(AppComponent);