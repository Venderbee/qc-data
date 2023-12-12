(() => {
    const Filters = (props) => {
        let updateAssortedData = (clickEvent) => {
            props.updateFormState({
                assortedData: clickEvent.target.value,
            });
        }

        return (
            <React.Fragment>

                <div className='container'>
                    <div className='row' class='words'>
                        <div className='col-md-2'></div>
                        <div className='col-md-4'>
                            <p class='words'><b><center>Assorted QC Data</center></b></p>
                        </div>
                        <div className='col-md-4' class='words'><center>
                            <select
                                onChange={updateAssortedData}
                            >
                               <option value=''>&nbsp;</option>
                                <option value='food'>Most Eaten Food</option>
                                <option value='totem'>Totems Popped</option>
                                <option value='disc'>Most Played Music Disc</option>
                                <option value='tag'>Nametags Used</option>
                                <option value='clock'>Clocks Made</option>
                                <option value='fire'>Fireworks Used</option>
                                <option value='rod'>Lightning Rods Crafted</option>
                                <option value='eyes'>Ender Eyes Used</option>
                            </select></center>
                        </div>
                        <div className='col-md-2'></div>

                    </div>
                </div>
            </React.Fragment>
        )
    }

    const DataTable = (props) => {
        return (
            <div className="table-responsive"><center>
                <table className="table">
                    <tbody><tr>
                        <th>filter</th>
                        <th>stat</th>
                        <th>number</th>
                    </tr>
                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.filter}</td>
                                    <td>{row.stat}</td>
                                    <td>{row.number}</td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table></center>
            </div>
        );
    }

    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);
            this.originalData = props.originalData;
            this.state = {
                assortedData: '',
            };

            this.updateFormState = this.updateFormState.bind(this);
        }
        updateFormState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.originalData;
            if (this.state.assortedData !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.filter === this.state.assortedData
                });
            }

            return (
                <React.Fragment>
                    <Filters
                       assortedData={this.state.filter}
                        updateFormState={this.updateFormState}

                    />

                    <hr />

                    <DataTable
                        dataToDisplay={filteredData}
                    />
                </React.Fragment>
            );
        }
    }
    const lolData = [
        {
            "filter": "food",
            "stat": "carrot",
            "number": "1322",
        },
        {
            "filter": "food",
            "stat": "carrot",
            "number": "822",
        },
        {
            "filter": "food",
            "stat": "carrot",
            "number": "2142",
        },
        {
            "filter": "food",
            "stat": "cake",
            "number": "52",
        },
        {
            "filter": "food",
            "stat": "carrot",
            "number": "1183",
        },
        {
            "filter": "food",
            "stat": "steak",
            "number": "620",
        },
        {
            "filter": "food",
            "stat": "chorus fruit",
            "number": "478",
        },
        //
        {
            "filter": "totem",
            "stat": "totems popped",
            "number": "0",
        },
        {
            "filter": "totem",
            "stat": "totems popped",
            "number": "5",
        },
        {
            "filter": "totem",
            "stat": "totems popped",
            "number": "0",
        },
        {
            "filter": "totem",
            "stat": "totems popped",
            "number": "0",
        },
        {
            "filter": "totem",
            "stat": "totems popped",
            "number": "2",
        },
        {
            "filter": "totem",
            "stat": "totems popped",
            "number": "0",
        },
        {
            "filter": "totem",
            "stat": "totems popped",
            "number": "0",
        },
        //
        {
            "filter": "disc",
            "stat": "Stal",
            "number": "3",
        },
        {
            "filter": "disc",
            "stat": "5",
            "number": "3",
        },
        {
            "filter": "disc",
            "stat": "Blocks",
            "number": "2",
        },
        {
            "filter": "disc",
            "stat": "Otherside",
            "number": "1",
        },
        {
            "filter": "disc",
            "stat": "Otherside",
            "number": "9",
        },
        {
            "filter": "disc",
            "stat": "Otherside",
            "number": "4",
        },
        {
            "filter": "disc",
            "stat": "Mellohi",
            "number": "9",
        },
        {
            "filter": "disc",
            "stat": "Far",
            "number": "9",
        },
        //
        {
            "filter": "tag",
            "stat": "Nametags",
            "number": "0",
        },
        {
            "filter": "tag",
            "stat": "Nametags",
            "number": "99",
        },
        {
            "filter": "tag",
            "stat": "Nametags",
            "number": "4",
        },
        {
            "filter": "tag",
            "stat": "Nametags",
            "number": "1716",
        },
        {
            "filter": "tag",
            "stat": "Nametags",
            "number": "22",
        },
        {
            "filter": "tag",
            "stat": "Nametags",
            "number": "48",
        },
        // 
        {
            "filter": "clock",
            "stat": "Clocks made",
            "number": "1",
        },
        {
            "filter": "clock",
            "stat": "Clocks made",
            "number": "46",
        },
        {
            "filter": "clock",
            "stat": "Clocks made",
            "number": "0",
        },
        {
            "filter": "clock",
            "stat": "Clocks made",
            "number": "0",
        },
        {
            "filter": "clock",
            "stat": "Clocks made",
            "number": "13",
        },
        {
            "filter": "clock",
            "stat": "Clocks made",
            "number": "0",
        },
        {
            "filter": "clock",
            "stat": "Clocks made",
            "number": "6",
        },
        //
        {
            "filter": "fire",
            "stat": "Fireworks Launched",
            "number": "4",
        },
        {
            "filter": "fire",
            "stat": "Fireworks Launched",
            "number": "173",
        },
        {
            "filter": "fire",
            "stat": "Fireworks Launched",
            "number": "32633",
        },
        {
            "filter": "fire",
            "stat": "Fireworks Launched",
            "number": "1875",
        },
        {
            "filter": "fire",
            "stat": "Fireworks Launched",
            "number": "3459",
        },
        {
            "filter": "fire",
            "stat": "Fireworks Launched",
            "number": "3769",
        },
        {
            "filter": "fire",
            "stat": "Fireworks Launched",
            "number": "6273",
        },
        //
        {
            "filter": "rod",
            "stat": "Lightning Rods Crafted",
            "number": "0",
        },
        {
            "filter": "rod",
            "stat": "Lightning Rods Crafted",
            "number": "11",
        },
        {
            "filter": "rod",
            "stat": "Lightning Rods Crafted",
            "number": "0",
        },
        {
            "filter": "rod",
            "stat": "Lightning Rods Crafted",
            "number": "0",
        },
        {
            "filter": "rod",
            "stat": "Lightning Rods Crafted",
            "number": "109",
        },
        {
            "filter": "rod",
            "stat": "Lightning Rods Crafted",
            "number": "5",
        },
        {
            "filter": "rod",
            "stat": "Lightning Rods Crafted",
            "number": "18",
        },
        //
        {
            "filter": "eyes",
            "stat": "Eyes of Ender Used",
            "number": "0",
        },
        {
            "filter": "eyes",
            "stat": "Eyes of Ender Used",
            "number": "14",
        },
        {
            "filter": "eyes",
            "stat": "Eyes of Ender Used",
            "number": "1",
        },
        {
            "filter": "eyes",
            "stat": "Eyes of Ender Used",
            "number": "88",
        },
        {
            "filter": "eyes",
            "stat": "Eyes of Ender Used",
            "number": "3",
        },
        {
            "filter": "eyes",
            "stat": "Eyes of Ender Used",
            "number": "3",
        },
        {
            "filter": "eyes",
            "stat": "Eyes of Ender Used",
            "number": "0",
        },
    ];

    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={lolData} />);
})();