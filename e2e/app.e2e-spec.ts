import { FirebaseCrudPage } from './app.po';

describe('firebase-crud App', function() {
  let page: FirebaseCrudPage;

  beforeEach(() => {
    page = new FirebaseCrudPage();
  });

  it('aplicativo funcionando..', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app funcionando!');
  });
});
