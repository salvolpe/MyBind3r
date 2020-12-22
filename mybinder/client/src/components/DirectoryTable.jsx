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
    { title: "The Little Mermaid", owner: "Prezbo", lastModified: "1/2/2019" },
    {title: "Romeo and Juliet", owner: "Ferguson", lastModified: "10/12/2018"},
    {title: "Hamlet", owner: "Tian", lastModified: "8/8/2018"},
    {title: "Annie", owner: "Selena", lastModified:"5/22/2018"},
    {title: "MacBeth", owner: "Kenya", lastModified: "2/13/2018"}, 
    {title: "The Vagina Monologues", owner: "Sal", lastModified: "1/31/2018"},
    {title: "King Lear", owner: "Dean Tini", lastModified: "1/1/2018"},
    {title: "Othello", owner: "Sharon", lastModified: "11/25/2017"},
    {title: "A Raisin in the Sun", owner: "Sal", lastModified: "9/8/2017"},
    {title: "Twelfth Night ", owner: "Brian", lastModified: "3/31/2017"},
    {title: "Angels in America", owner: "YY", lastModified: "1/8/2015"},
    {title: "Hamiliton", owner: "Sal", lastModified: "4/31/2014"},
    {title: "Once on this Island", owner: "Selena", lastModified: "6/30/2013"},
    {title: "Oedipus Rex", owner: "Sal", lastModified: "4/31/2012"}
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
