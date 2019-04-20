class RenderCount{
  state = {
    table: 0,
    row: 0,
    cell: 0,
    headercell: 0
  }

  add (name) {
    this.state[name] = this.state[name] + 1
  }
  display () {
    console.log(
      'table:', this.state.table,
      'row:', this.state.row,
      'cell:', this.state.cell,
      'headercell:', this.state.headercell,
    )
  }

}

export default RenderCount