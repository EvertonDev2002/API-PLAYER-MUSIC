# API em Nodejs: exemplo para projeto escolar - Player Music

---

#### Rota para Song


**Listar todas músicas**


`https://ex-player.herokuapp.com/list/song`


**Pesquisar pelo gênero da música**


`https://ex-player.herokuapp.com/genre/song:genre`


Basta substituir o parâmetro `:genre` para o gênero musical que procura.


**Pesquisar pelo artista da música**


`https://ex-player.herokuapp.com/artist/song:artist`


Basta substituir o parâmetro `:artist` para o artista que procura.


**Pesquisar pelo álbum da música**


`https://ex-player.herokuapp.com/title_album/song:title_album`


Basta substituir o parâmetro `:title_album` para o título do álbum que procura.


**Adicionar música**


JSON


{


"title_album": "titulo Do Álbum",


"albumcover":"Link Da Capa",


"artist":"Nome Do Artista",


"genre": "Gênero muscial",


"lyrics": "Letra Da Música",


"file": "Link da Música",


"title_song": "Título da música",


"duration": duração em segundos


}


Enviar requisição pelo método POST na seguinte rota.


`https://ex-player.herokuapp.com//create/song`

**Deletar Música**


`https://ex-player.herokuapp.com/delete/song:id_song`


Basta substituir o parâmetro `:id_song` para a chave primária (Id) da música que deseja deletar.


#### Rota para Álbum


**Listar todos os ábuns**


`https://ex-player.herokuapp.com/list/album`


**Pesquisar pelo álbum**


`https://ex-player.herokuapp.com/title_album/album:title_album`


Basta substituir o parâmetro `:title_album` para o título do álbum que procura.


**Adicionar música**



JSON

{


"title_album": "titulo Do Álbum",


"albumcover":"Link Da Capa",


"artist":"Nome Do Artista",


"genre": "Gênero muscial",


"lyrics": "Letra Da Música",


"file": "Link da Música",


"title_song": "Título da música",


"duration": duração em segundos


}



Enviar requisição pelo método POST na seguinte rota.


`https://ex-player.herokuapp.com/create/album`


**Deletar Música**


`https://ex-player.herokuapp.com/delete/album:id_album`


Basta substituir o parâmetro `:id_album` para a chave primária (Id) da música que deseja deletar.

