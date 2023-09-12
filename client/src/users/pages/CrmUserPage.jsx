import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import useUsers from "../hooks/useUsers";
import { Navigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import CardDeleteDialog from "../../components/DeleteDialog";
import CardCrm from "../components/CardCrm";
import TableCrm from "../components/TableCrm";

const CrmUserPage = () => {
  const {
    handleGetUsers,
    value,
    handleDeleteUser,
    handleChangeBusinessStatus,
  } = useUsers();

  const { users, user } = value;

  const [query, setQuery] = useState(""); // the query by, ex: name, id
  const [filteredUsers, setFilteredUsers] = useState([]); // the users filtered by query
  const [searchParams] = useSearchParams(); // the search params from the url

  useEffect(() => {
    handleGetUsers();
  }, []);

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  useEffect(() => {
    if (users) {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.name.first.includes(query) || String(user._id).includes(query)
        )
      );
    }
  }, [query, users]);

  const [isDialogopen, setDialog] = useState(false);
  const [userId, setuserId] = useState(null);

  const handleDialog = (term, id) => {
    if (term === "open") {
      setDialog(true);
      setuserId(id);
      return;
    }
    setDialog(false);
  };

  const onDeleteUser = () => {
    handleDialog();
    handleDeleteUser(userId);
  };
  if (!user?.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;
  if (!users?.length)
    return (
      <div>
        <br /> <br /> opps.., there are no users dorm the data base
      </div>
    );

  return (
    <>
      <PageHeader
        title="CRM users"
        subtitle="here you can see all the users and update and delete them "
      />
      <CardCrm
        users={filteredUsers}
        handleDialog={handleDialog}
        handleChangeBusinessStatus={handleChangeBusinessStatus}
      />
      <TableCrm
        users={filteredUsers}
        handleDialog={handleDialog}
        handleChangeBusinessStatus={handleChangeBusinessStatus}
      />
      <CardDeleteDialog
        isDialogopen={isDialogopen}
        onDelete={onDeleteUser}
        onChangeDialog={handleDialog}
        object={"user"}
      />
    </>
  );
};

export default CrmUserPage;
