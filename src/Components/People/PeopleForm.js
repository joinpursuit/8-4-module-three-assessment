
export default function PeopleForm({ people, personValue, setPersonValue, setFoundPerson }) {
    
    const onSearchChange = (e) => {
        const person = (e.target.value);
        setPersonValue(person)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        findPerson();
        setPersonValue('')
    }

    function findPerson (){
        const find = people.find(el => el['name'].toLowerCase() === personValue.toLowerCase());
        if (find === undefined) {
            setFoundPerson('Not found')
        } else {
            setFoundPerson(find) 
        }
    }

    return (
        <>
            <form className='search-person-form' onSubmit={onSubmit}>
                <div className="form-controls">
                    <input
                        onChange={onSearchChange}
                        id='video-search'
                        value={personValue}
                        type='text'
                        placeholder='Enter Search Keyword' />
                    <button id="search-button">Search</button>
                </div>
            </form>
        </>
    )
}

