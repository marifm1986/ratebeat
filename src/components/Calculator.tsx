
const Calculator = () => {
    return (
        <div className="calculator-container " id="mortgage-calculator">
            <div className="container flex justify-between mx-auto py-16 gap-8 max-lg:flex-col">
                <div className="text-wrapper flex flex-col w-1/2 max-lg:w-full">
                    <img src="./calculator-image.webp" alt="" />
                    <h2 className="text-2xl font-bold mb-4">Mortgage Calculator</h2>
                    <p className="mb-4">Use this mortgage calculator to determine the Principal, Interest, Taxes, and Insurance (PITI) you can expect to pay each month. This is an easy to use calculator to estimate the mortgage that best fits your budget. If you have any questions or need expert advice from one of our professionals call (877) 877 7575</p>
                </div>
                <div className="calculator-wrapper w-full shadow-xl rounded-lg overflow-hidden ">
                    <iframe title="Mortgage Calculator" src="https://www.mortgagecalculator.org/webmasters/?downpayment=50000&homevalue=300000&loanammount=250000&interestrate=4&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0" width="100%" height="1002" style={{ border: 'none' }}></iframe>
                </div>
            </div>
        </div>
    )
}

export default Calculator