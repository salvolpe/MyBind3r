import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table"; //Cite this

export default function DirectoryTable() {
  const classes = useStyles();
  const history = useHistory();
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
    { title: "Much Ado About Nothing", owner: "Me", lastModified: "12/15/20" },
    { title: "The Little Mermaid", owner: "Prezbo", lastModified: "1/2/19" },
  ]);

  return (
    <MaterialTable
      title="My Scripts"
      columns={columns}
      data={data}
      actions={[
        {
          icon: "edit",
          tooltip: "Edit Script",
          onClick: () => {
            history.push("/bind3r");
          },
        },
        {
          icon: "delete",
          tooltip: "Delete Script",
          onClick: () => {
            alert("Don't delete me!");
          },
        },
      ]}
      localization={{
        pagination: {
          labelRowsSelect: "scripts per page",
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
