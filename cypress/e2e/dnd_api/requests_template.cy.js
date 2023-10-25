describe('Running GET requests against DND DB', () => {
    it('Run GET Request to fetch Players', () => {
        cy.request({
            method: 'GET',
            url: 'https://db.moogleshost.com/api/v1/db/data/v1/p3m25o1npm8vp3k/Player_Data',
            headers: {
                'accept': 'application/json',
                'xc-token': 'token'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.list).to.be.an('array').that.has.lengthOf(1);
        });
    })

    it('Run Multiple POST to Add Players', () => {
        cy.readFile('./cypress/fixtures/records.json').then((data) => {
            data.forEach((item) => {
                const REQUEST_BODY = {
                  Id: item.id,
                  "Player Name": item.playerName,
                  CreatedAt: item.createdAt,
                  UpdatedAt: item.updatedAt,
                  Constitution: item.constitution,
                  Wisdom: item.wisdom,
                  Strength: item.strength,
                  Dexterity: item.dexterity,
                  Intelligence: item.intelligence,
                  Charisma: item.charisma,
                  Class: item.class,
                };

                const STATUS = item.status;
                const ERRORS = item.errors;
                const ERRORCODE = item.errorCode;

                cy.request({
                  method: "POST",
                  url: "https://db.moogleshost.com/api/v1/db/data/v1/p3m25o1npm8vp3k/Player_Data",
                  headers: {
                    accept: "application/json",
                    "xc-token": "token",
                  },
                  body: REQUEST_BODY,
                  failOnStatusCode: false
                }).then((response) => {
                  expect(response.status).to.eql(STATUS);
                  if (STATUS != 200) {
                    if (response.body.hasOwnProperty("msg")) {
                      expect(response.body.msg).to.contain(ERRORCODE);
                    } 
                    else {
                      expect(response.body.message).to.contain(ERRORS);
                      expect(response.body.info.code).to.contain(ERRORCODE);
                    }
                  } else {
                    expect(response.body.Id).to.eql(item.id);
                    expect(response.body["Player Name"]).to.eql(item.playerName);
                  }
                });
            })
        });
    })
});