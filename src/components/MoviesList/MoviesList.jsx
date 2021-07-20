import { Container } from "@material-ui/core";
import React from "react";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";
import { useStyles } from "../MoviesList/MoviesList.style";
import Card from "@material-ui/core/Card";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

function MoviesList(props) {
  const { movies, ondelete, openDialog, loading, setConfirmDialog, onUpdate } =
    props;
  const classes = useStyles();
  const handleUpdate = (id) => {
    openDialog();
    onUpdate(id);
  };

  const onDeleteClick = (id) => {
    setConfirmDialog({
      isOpen: true,
      title: "Are you sure you want to delete this Movie?",
      subtitle: "You can't undo this operation!",
      onConfirm: () => {ondelete(id)},
    });
  };
  const columns = [
    {
      name: "Movie Title",
      selector: "movieTitle",
      sortable: true,
    },
    {
      name: "Movie Genre",
      selector: "movieGenre",
      sortable: true,
    },
    {
      name: "Movie Cast(Any Hero/Heroine)",
      selector: "movieCast",
      sortable: true,
    },
    {
      name: "Rating(Out of 5)",
      selector: "movieIMDBRating",
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className={classes.actions}>
          <EditOutlinedIcon
           style={{ color: 'green' }}
            onClick={() => handleUpdate(row._id)}
          />
          <DeleteOutlinedIcon
            color="secondary"
            onClick={() => onDeleteClick(row._id)}
          />
        </div>
      ),
    },
  ];

  return loading ? (
    <div className={classes.loader}>
      <CircularProgress color="secondary" />
    </div>
  ) : (
    <Container>
      <h1 className={classes.heading}>Movies</h1>
      <hr className={classes.hrStyle} />
      <Card className={classes.card}>
        <DataTable
          // title="Movies"
          columns={columns}
          data={movies}
          noDataComponent
          defaultSortFieldId={1}
          sortIcon={<SortIcon />}
        />
      </Card>
    </Container>
  );
}

export default MoviesList;
