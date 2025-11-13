import { useState } from 'react'
import './App.css'
import axios from 'axios'
const endpoint_server = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'



function App() {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: true


  });
  function handleFormData(e) {
    const { name, type, value } = e.target
    setFormData({
      ...formData,
      [name]: e.target.value

    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    axios.post(endpoint_server, formData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        console.log(response)
      })

  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input type="text" className="form-control" name='author' placeholder='inserisci nome autore' value={formData.name} onChange={handleFormData} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" name='title' placeholder='Titolo del post' value={formData.title} onChange={handleFormData} />
      </div>
      <div className="mb-3">
        <input type="text" className="form-control" name='body' placeholder='Inserisci il testo del post' value={formData.body} onChange={handleFormData} />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" name='public' checked={formData.public} onChange={(e) => setFormData({ ...formData, public: e.target.checked })} />
        <label className="form-check-label">post pubblico</label>

      </div>


      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )

}

export default App
