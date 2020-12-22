import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";
import MaterialTable from "material-table"; //Cite this

export default function DirectoryTable() {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useParams();
  const columns = [
    { title: "Title", field: "title" },
    {
      title: "Owner",
      field: "owner",
    },
    {
      title: "Last Modified",
      field: "lastModified",
      type: "datetime",
      dateSetting: { locale: "en-US" },
    },
  ];

  const [data, setData] = useState([
    {
      title: "Much Ado About Nothing",
      owner: `${user}`,
      lastModified: "12/15/20",
    },
    { title: "The Little Mermaid", owner: "Prezbo", lastModified: "1/2/19" },
  ]);

  return (
    <MaterialTable
      title="My Binders"
      columns={columns}
      data={data}
      onRowClick={(event, rowData) => {
        history.push(`/${user}/bind3r/${rowData.title}`);
      }}
      actions={[
        {
          icon: "edit",
          tooltip: "Edit Binder",
          onClick: (event, rowData) => {
            history.push(`/${user}/bind3r/${data.title}`);
          },
        },
        {
          icon: "delete",
          tooltip: "Delete Binder",
          onClick: () => {
            alert("Don't delete me!");
          },
        },
      ]}
      localization={{
        pagination: {
          labelRowsSelect: "binders per page",
        },
      }}
    />
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
