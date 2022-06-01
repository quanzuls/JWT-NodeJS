'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('User', [{
      "id": 1,
      "fullname": "Blisse Sawyer",
      "username": "bsawyer0",
      "email": "bsawyer0@reddit.com",
      "gender": "Female",
      "password": "j2GsvWx"
    }, {
      "id": 2,
      "fullname": "Alfons Skelington",
      "username": "askelington1",
      "email": "askelington1@comcast.net",
      "gender": "Male",
      "password": "2wheY4MWJO"
    }, {
      "id": 3,
      "fullname": "Ber Zylbermann",
      "username": "bzylbermann2",
      "email": "bzylbermann2@cbc.ca",
      "gender": "Male",
      "password": "JTJUkQ"
    }, {
      "id": 4,
      "fullname": "Edvard Guarnier",
      "username": "eguarnier3",
      "email": "eguarnier3@bbc.co.uk",
      "gender": "Male",
      "password": "a6zadbvWb"
    }, {
      "id": 5,
      "fullname": "Markos Frohock",
      "username": "mfrohock4",
      "email": "mfrohock4@google.co.jp",
      "gender": "Agender",
      "password": "Tul1KbY"
    }, {
      "id": 6,
      "fullname": "Fremont Maryott",
      "username": "fmaryott5",
      "email": "fmaryott5@google.com.au",
      "gender": "Male",
      "password": "Fkkd7s"
    }, {
      "id": 7,
      "fullname": "Margaret Dowles",
      "username": "mdowles6",
      "email": "mdowles6@mac.com",
      "gender": "Female",
      "password": "Q9HbORRRFu"
    }, {
      "id": 8,
      "fullname": "Lory McDonnell",
      "username": "lmcdonnell7",
      "email": "lmcdonnell7@sohu.com",
      "gender": "Female",
      "password": "hbrareMYBx"
    }, {
      "id": 9,
      "fullname": "Aurel Macon",
      "username": "amacon8",
      "email": "amacon8@bravesites.com",
      "gender": "Female",
      "password": "WTGP1f"
    }, {
      "id": 10,
      "fullname": "Gail Fuller",
      "username": "gfuller9",
      "email": "gfuller9@cam.ac.uk",
      "gender": "Female",
      "password": "P0SVvKIud"
    }, {
      "id": 11,
      "fullname": "Ingeberg Priestner",
      "username": "ipriestnera",
      "email": "ipriestnera@51.la",
      "gender": "Female",
      "password": "vOQRjWEPgZWV"
    }, {
      "id": 12,
      "fullname": "Carolyn Haspineall",
      "username": "chaspineallb",
      "email": "chaspineallb@vk.com",
      "gender": "Agender",
      "password": "omxzmlYTt"
    }, {
      "id": 13,
      "fullname": "Giacobo Reignould",
      "username": "greignouldc",
      "email": "greignouldc@newsvine.com",
      "gender": "Male",
      "password": "NJHvcXBu"
    }, {
      "id": 14,
      "fullname": "Biron Vahey",
      "username": "bvaheyd",
      "email": "bvaheyd@zdnet.com",
      "gender": "Male",
      "password": "FcUpRhkdOEY"
    }, {
      "id": 15,
      "fullname": "Cati Wringe",
      "username": "cwringee",
      "email": "cwringee@technorati.com",
      "gender": "Female",
      "password": "4jPtYR"
    }, {
      "id": 16,
      "fullname": "Giffer Malecky",
      "username": "gmaleckyf",
      "email": "gmaleckyf@ftc.gov",
      "gender": "Male",
      "password": "jWB9lu"
    }, {
      "id": 17,
      "fullname": "Jard Feasby",
      "username": "jfeasbyg",
      "email": "jfeasbyg@webnode.com",
      "gender": "Male",
      "password": "3R6qbXrR5ueQ"
    }, {
      "id": 18,
      "fullname": "Celesta Longhorne",
      "username": "clonghorneh",
      "email": "clonghorneh@smh.com.au",
      "gender": "Female",
      "password": "RQ9IH6kP"
    }, {
      "id": 19,
      "fullname": "Juliane Goble",
      "username": "jgoblei",
      "email": "jgoblei@slideshare.net",
      "gender": "Female",
      "password": "5Mw3ZO"
    }, {
      "id": 20,
      "fullname": "Joyan Plowell",
      "username": "jplowellj",
      "email": "jplowellj@nih.gov",
      "gender": "Female",
      "password": "Frr1PZwFbDqc"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
