import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: ''


  });
  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form>
      <div class="mb-3">
        <input type="text" className="form-control" name='author' placeholder='inserisci nome autore' />
      </div>
      <div class="mb-3">
        <input type="text" className="form-control" name='title' placeholder='Titolo del post' />
      </div>
      <div class="mb-3">
        <input type="text" className="form-control" name='body' placeholder='Inserisci il testo del post' />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )

}

export default App
