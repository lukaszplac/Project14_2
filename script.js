var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img_url: 'http://piq.codeus.net/static/media/userpics/piq_16327_400x400.png'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img_url: 'https://images.nike.com/is/image/DotCom/PDP_THUMB_RETINA/343938_419/buty-dla-niemowlat-dynamo-free.jpg'
  },
  {
  	id: 3,
    title: 'The Dog',
    desc: 'Film o psie',
    img_url: 'http://piq.codeus.net/static/media/userpics/piq_16327_400x400.png'
  },
  {
  	id: 4,
    title: 'The Cat',
    desc: 'Film o kocie',
    img_url: 'https://images.nike.com/is/image/DotCom/PDP_THUMB_RETINA/343938_419/buty-dla-niemowlat-dynamo-free.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img_url}, )
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );


ReactDOM.render(element, document.getElementById('app'));