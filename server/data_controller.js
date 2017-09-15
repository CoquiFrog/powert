module.exports = {
   
    getOne: ( req, res, next ) => {
      console.log("HITTING HERE!!!")
      const dbInstance = req.app.get('db');
      console.log(dbInstance);
      const { character, meaning, onyomi, kunyomi, answer1, answer2, answer3, answer4, correctanswer} = req.body;

      dbInstance.pull_kanji([])
      .then( (response) => res.status(200).send(response))
      .catch( () => res.status(500).send());
    }
  };