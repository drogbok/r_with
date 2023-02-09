describe('로그인 화면', () => {
  it('로그인 화면 접근', () => {

    cy.visit('https://release-rwith-web-client-stg.dxgx6puil9wtf.amplifyapp.com/')
  
    cy.wait(2000);

    cy.get('[href="/login"]').click();

    cy.get('.design-cache-prefix-t846p7').contains('로그인');

    
  });
})

