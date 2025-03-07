//react functions
import { useState, useEffect } from "react";

//Modal
import { ModalDeleteUser } from "../../components/index";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

//styles and components
import {
  Title,
  Container,
  BackgroundTitle,
  Line,
  ConteinerTS,
  ConteinerTable,
  TypeSelect,
  LoadingStyles,
} from "./Styles";
import { Table, SearchBar } from "../../components/index";
import { AiOutlineCloseCircle } from "react-icons/ai";

//translations
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

//icons
import { RiDeleteBin5Line } from "react-icons/ri";
import { LoadingOutlined } from "@ant-design/icons";

//Hooks
import {
  useDeleteUser,
  useGetUsers,
  useUpdateUsers,
} from "../../hooks/query/user";

export default function ManageUser() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // States and Variables

  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const queryClient = useQueryClient();

  // Table Handling

  const columns = [
    { field: "name", header: translations.tableHeaderName },
    { field: "email", header: translations.tableHeaderEmail },
    { field: "manage", header: translations.tableHeaderType },
    { field: "delete", header: "" },
  ];

  //functions

  const { data: allUsers, isLoading } = useGetUsers({
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: deleteUser } = useDeleteUser({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success(translations.toastOnSuccessDelete);
    },
    onError: (err) => {
      toast.error(translations.toastOnErroDelete, err);
    },
  });

  const { mutate: updateUser } = useUpdateUsers({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      toast.success(translations.toastOnSuccessChange);
    },
    onError: (err) => {
      toast.error(translations.toastOnErroChange, err);
    },
  });

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    formatUsersList(allUsers);

    setUsers(
      formatUsersList(
        allUsers.filter((obj) =>
          obj.name.toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };

  const selectOptions = [
    { label: translations.typeAdm, value: "admin" },
    { label: translations.typeInvited, value: "invited" },
    { label: translations.typeExt, value: "external" },
  ];

  function handleTypeChange(_id, data) {
    const newUserData = { type: data };
    updateUser({ _id, newUserData });
  }

  function verifyUserType(userType) {
    if (userType === "admin") {
      return translations.typeAdm;
    } else if (userType === "invited") {
      return translations.typeInvited;
    } else {
      return translations.typeExt;
    }
  }

  const formatUsersList = (users) => {
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      manage: (
        <TypeSelect
          defaultValue={() => verifyUserType(user?.type)}
          onChange={(value) => handleTypeChange(user?._id, value)}
          options={selectOptions}
        />
      ),
      delete: (
        <RiDeleteBin5Line
          color="#debc96"
          cursor={"pointer"}
          onClick={() => {
            setUserId(user._id);
            openModalDelete();
          }}
        />
      ),
    }));
  };

  //Modal Functions

  // Modal Handling

  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const modalCloseButton = <AiOutlineCloseCircle />;

  function handleUserDelete(_id) {
    deleteUser(_id);
    closeModalDelete();
  }

  //Update the user list by the filter

  useEffect(() => {
    if (allUsers) {
      setUsers(formatUsersList(allUsers));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, allUsers]);

  return (
    <Container>
      <BackgroundTitle>
        <Title>{translations.title1}</Title>
        <Line />
      </BackgroundTitle>
      <ConteinerTS>
        <SearchBar
          placeholder={translations.placeholderSearch}
          value={searchQuery}
          search={handleSearchChange}
          width="90%"
        />
        {isLoading ? (
          <LoadingStyles>
            <LoadingOutlined />
          </LoadingStyles>
        ) : (
          <ConteinerTable>
            <Table columns={columns} data={users} />
          </ConteinerTable>
        )}
      </ConteinerTS>
      <ModalDeleteUser
        close={closeModalDelete}
        handleDelete={handleUserDelete}
        id={userId}
        modal={modalDelete}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalDelete}
      />
    </Container>
  );
}
