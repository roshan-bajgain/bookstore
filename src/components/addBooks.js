import React from 'react';

const AddBooks = () => (
  <form>
    <input placeholder='ADD NEW Book' />
    <select name='books' id='book'>
        <option value='science'>Friction</option>
        <option value='Action'>Roshan</option>
        <option value='Economic'>money</option>
        <option value='Account'>credit</option>
    </select>
    <button type='submit'>Add Book</button>
  </form>
)

export default AddBooks