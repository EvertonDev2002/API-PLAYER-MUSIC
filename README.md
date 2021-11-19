# API em Nodejs: COMO USAR
---

Para iniciar projeto:


yarn dev (para modo desenvolvedor)


yarn start (para modo produção)


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


`https://ex-player.herokuapp.com/title/album/song/:title_album`


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


`https://ex-player.herokuapp.com/create/song`


**Atualizar Uma Coluna Da Música**


JSON


{
    "title_song": "Digite o nome da música"
}


`https://ex-player.herokuapp.com/update/album/:id_album`


Basta substituir o parâmetro `:id_song` para a chave primária (Id) da música que deseja atualizar.


**Atualizar Todas As Colunas Da Música**


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


`https://ex-player.herokuapp.com/update/all/album/:id_album`


Basta substituir o parâmetro `:id_song` para a chave primária (Id) da música que deseja atualizar.



**Deletar Música**


`https://ex-player.herokuapp.com/delete/song:id_song`


Basta substituir o parâmetro `:id_song` para a chave primária (Id) da música que deseja deletar.


#### Rota para Álbum


**Listar todos os ábuns**


`https://ex-player.herokuapp.com/list/album`


**Pesquisar pelo álbum**


`https://ex-player.herokuapp.com/title/album/:title_album`


Basta substituir o parâmetro `:title_album` para o título do álbum que procura.


**Adicionar Álbum**


JSON


{


"title_album": "titulo Do Álbum",


"albumcover":"Link Da Capa",

}



Enviar requisição pelo método POST na seguinte rota.


`https://ex-player.herokuapp.com/create/album`



**Utualizar Uma Coluna do Álbum**


JSON


{
    "albumcover": "Digite O Link Da Capa"
}


`https://ex-player.herokuapp.com/update/album/:id_album`


Basta substituir o parâmetro `:id_album` para a chave primária (Id) do álbum que deseja atualizar.


**Atualizar Todas As Colunas Do Álbum**


JSON


{
    "albumcover": "Digite O Link Da Capa",


    "albumcover": "sasasa"  
}


`https://ex-player.herokuapp.com/update/all/album/:id_album`


Basta substituir o parâmetro `:id_album` para a chave primária (Id) do álbum que deseja atualizar.


**Deletar Álbum**


`https://ex-player.herokuapp.com/delete/album:id_album`


Basta substituir o parâmetro `:id_album` para a chave primária (Id) da álbum que deseja deletar.


#### Rota para Artista


**Listar todos os artistas**


`https://ex-player.herokuapp.com/list/artist`


**Pesquisar pelo artista**


`https://ex-player.herokuapp.com/artist/artist/:artist`


Basta substituir o parâmetro `:artist` para o título do álbum que procura.


**Adicionar artista**


JSON


{


"artist": "Nome do artista",


}



Enviar requisição pelo método POST na seguinte rota.


`https://ex-player.herokuapp.com/create/artist`



**Utualizar Artista**


JSON


{
    "artist": "Digite O Novo Nome"
}


`https://ex-player.herokuapp.com/update/artist/:id_artist`


Basta substituir o parâmetro `:id_artist` para a chave primária (Id) do álbum que deseja atualizar.


**Deletar Artista**


`https://ex-player.herokuapp.com/delete/artist/:id_artist`


Basta substituir o parâmetro `:id_artist` para a chave primária (Id) da álbum que deseja deletar.


#### Rota para Gênero


**Listar todos os gêrero**


`https://ex-player.herokuapp.com/list/genre`


**Pesquisar pelo gêrero**


`https://ex-player.herokuapp.com/genre/genre/:genre`


Basta substituir o parâmetro `:genre` para o título do álbum que procura.


**Adicionar gêrero**


JSON


{


"genro": "Novo gênero",


}



Enviar requisição pelo método POST na seguinte rota.


`https://ex-player.herokuapp.com/create/genre`



**Utualizar Gênero**


JSON


{
    "genro": "Novo gênero"
}


`https://ex-player.herokuapp.com/update/genre/:id_genre`


Basta substituir o parâmetro `:id_genre` para a chave primária (Id) do álbum que deseja atualizar.


**Deletar Artista**


`https://ex-player.herokuapp.com/delete/genre/:id_genre`


Basta substituir o parâmetro `:id_genre` para a chave primária (Id) da álbum que deseja deletar.

