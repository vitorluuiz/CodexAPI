const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // Configurações específicas para Firestore/MongoDB
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    console.log('✅ Conectado ao Firestore via MongoDB driver');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerra a aplicação se não conseguir conectar
  }
};

// Monitorar eventos de conexão
mongoose.connection.on('disconnected', () => {
  console.log('⚠️ Desconectado do banco de dados');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Erro na conexão:', err);
});

module.exports = connectDB;