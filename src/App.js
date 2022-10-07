import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Budgets from './components/Budgets'
import AddBudget from './components/AddBudget'


const App = () => {

    const [showAddBudget, setShowAddBudget] = useState(false)
    const [budgets, setBudgets] = useState([])

    useEffect(() => {
        const getBudgets = async () => {
            const budgetsFromServer = await fetchBudgets()
            setBudgets(budgetsFromServer)
        }
        getBudgets()
    }, [])

    // Fetch expense record
    const fetchBudgets = async () => {
        const res = await fetch('http://localhost:3000/budgets')
        const data = await res.json()

        return data
    }

    // Fetch expense record
    const fetchBudget = async (id) => {
        const res = await fetch(`http://localhost:3000/budgets/${id}`)
        const data = await res.json()
        return data
    }

    // Add expense record 
    const addBudget = async (budget) => {
        const res = await fetch('http://localhost:3000/budgets', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(budget),
        })
        const data = await res.json()
        setBudgets([...budgets, data])
    }

    // Delete expense record
 
    const deleteBudget = async (id) => {
        const res = await fetch(`http://localhost:3000/budgets/${id}`, {
            method: 'DELETE',
        })
        //We should control the response status to decide if we will change the state or not.
        res.status === 200
            ? setBudgets(budgets.filter((budget) => budget.id !== id))
            : alert('Error Deleting This expense')
    }


    // Toggle PaidOut Status
    const toggleReminder = async (id) => {
        const budgetToToggle = await fetchBudget(id)
        const updateBudget = {...budgetToToggle, ispaidout: !budgetToToggle.ispaidout}

        const res = await fetch(`http://localhost:3000/budgets/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateBudget),
        })

        const data = await res.json()

        setBudgets(
            budgets.map((budget) =>
                budget.id === id ? {...budget, ispaidout: data.ispaidout} : budget
            )
        )
    }

    return (
        <Router>
            <div className='container'>
                <Header
                    onAdd={() => setShowAddBudget(!showAddBudget)}
                    showAdd={showAddBudget}
                />
                <Route
                    path='/'
                    exact
                    render={(props) => (
                        <>
                            {showAddBudget && <AddBudget onAdd={addBudget}/>}
                            {budgets.length > 0 ? (
                                <Budgets
                                    budgets={budgets}
                                    onToggle={toggleReminder}
                                    onDelete={deleteBudget}

                                />
                            ) : (
                                'No expenditure found '
                            )}
                        </>
                    )}
                />
                
                <Footer/>
            </div>
        </Router>
    )
}

export default App
