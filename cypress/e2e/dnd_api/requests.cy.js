describe('Running API Calls', () => {
    it('Running a Get Request', () => {
        cy.request({
            method: 'GET',
            url: 'https://db.moogleshost.com/api/v1/db/data/v1/p3m25o1npm8vp3k/Player_Data',
            headers: {
                'accept': 'application/json',
                'xc-token': "token"
            },
            failOnStatusCode: false //Anything but a 2xx (200, 201), 3xx () will fail automatically.
        }).then((response) => {
            console.log(response);
            expect(response.status).to.equal(200);
            expect(response.body.list).to.be.an('array').that.has.lengthOf(1);
        });        
    })
    it('Running a Post Request', () => {
        cy.request({
          method: "POST",
          url: "https://db.moogleshost.com/api/v1/db/data/v1/p3m25o1npm8vp3k/Player_Data",
          headers: {
            accept: "application/json",
            "xc-token": "token",
          },
          body: {
                Id: 2,
                "Player Name": "Khal Drogo",
                CreatedAt: "2023-09-12 00:06:52+00:00",
                UpdatedAt: "2023-09-12 00:06:52+00:00",
                Constitution: 20,
                Wisdom: 10,
                Strength: 25,
                Dexterity: 10,
                Intelligence: 8,
                Charisma: 7,
                Class: "Barbarian"
          },
          failOnStatusCode: false, //Anything but a 2xx (200, 201), 3xx () will fail automatically.
        }).then((response) => {
            console.log(response);
            expect(response.status).to.equal(200);
        });      
    })
    it("Run DELETE Request to fetch Players", () => {
        cy.request({
        method: "DELETE",
        url: "https://db.moogleshost.com/api/v1/db/data/v1/p3m25o1npm8vp3k/Player_Data/2",
        headers: {
            accept: "application/json",
            "xc-token": "token",
        },
        }).then((response) => {
            expect(response.status).to.equal(200);
            console.log(response.body);
        });
    });
})