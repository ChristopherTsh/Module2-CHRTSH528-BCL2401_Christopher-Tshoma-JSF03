export default function persistState(store) {
    store.subscribe((mutation, state) => {
      axios.post('/api/saveState', state)
        .then(response => {
          console.log('State saved successfully:', response.data);
        })
        .catch(error => {
          console.error('Error saving state:', error);
        });
    });
  }
  
  