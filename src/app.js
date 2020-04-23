import mongoose from 'mongoose';
import app from './config';

app.listen(4000, () => {
  console.log('...... Listening on port 4000! \n');

  mongoose.connect('mongodb://localhost/' + 'blog', {useUnifiedTopology: true});
  const dbConnection = mongoose.connection;
  dbConnection.on('error', console.error.bind(console, 'connection error:'));
  dbConnection.once('open', () => {
    console.log('...... Connected to db -> 27017');
  });
});