module.exports = {
   
    getOne: ( req, res, next ) => {
      console.log("HITTING HERE!!!")
      const dbInstance = req.app.get('db');
      const { character, meaning, onyomi, kunyomi, answer1, answer2, answer3, answer4, correctanswer} = req.body;

      dbInstance.pull_kanji([])
      .then( (response) => {
        console.log(response)
      res.status(200).send(response)
      })
      .catch( () => res.status(500).send());
    },

    getGerman: (req, res, next) => {
      console.log("Getting German!!!")
      const dbInstance = req.app.get('db');
      const { word, meaning, answer1, answer2, answer3, answer4 } = req.body;

      dbInstance.pull_german([])
      .then( (response) => {
        console.log(response)
        res.status(200).send(response)
      })
      .catch( () => res.status(500).send());
    },
    getForeignkey: (req, res, next) => {
      console.log("Getting Foreign Key!!!")
      const dbInstance = req.app.get('db');
      const { germanid, word, meaning, answer1, answer2, answer3, answer4, kanjiid, character, onyomi, kunyomi } = req.body;

      dbInstance.foreign_key([])
      .then( (response) => {
        console.log(response)
        res.status(200).send(response)
      })
      .catch( () => res.status(500).send());
    }
  };