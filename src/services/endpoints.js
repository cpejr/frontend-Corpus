import api from "./api";  
import useAuthStore from "../stores/auth";

// Função para obter todas as linguagens
export const getLanguages = async () => {
  try {
    const { data } = await api.get("/language/");  
    return data;  
  } catch (error) {
    console.error("Erro ao buscar idiomas:", error);  
    throw error;  
  }
};

// Função para obter todos os países
export const getCountries = async () => {
  try {
    const { data } = await api.get("/country");  
    return data;  
  } catch (error) {
    console.error("Erro ao buscar países:", error);  
    throw error; 
  }
};

// Outros endpoints de CategoryType
export const getCategoryPrice = async (filters = {}) => {
  const { data } = await api.get("/categoryPrice", { params: filters });
  return data;
};

// Videos
export const getVideos = async () => {
  const { data } = await api.get(`/video`);
  return data;
};

// Alteração do método GET para POST no frontend
export const getVideosByParameters = async (filters = {}) => {
  try {
    
    const { data } = await api.post(`/videofilter`, filters); 
    return data;  
  } catch (error) {
    console.error("Erro ao buscar vídeos filtrados:", error);  
    throw error;  
  }
};


export const deleteVideos = async (_id) => {
  const { data } = await api.delete(`/video/${_id}`);
  return data;
};

export const createVideos = async (newVideo) => {
  const { data } = await api.post(`/video`, newVideo);
  return data;
};

export async function updateVideos({ _id, body }) {
  const { data } = await api.put(`/video/${_id}`, body);
  return data;
}

// Usuários
export async function getUsers() {
  const { data } = await api.get("/user");
  return data;
}

export async function deleteUser(_id) {
  const { data } = await api.delete(`/user/${_id}`);
  return data;
}

export async function updateUser({ _id, newUserData }) {
  const { data } = await api.put(`/user/${_id}`, newUserData);
  return data;
}

export async function createUser(newUser) {
  delete newUser.acceptTerms;
  const newEdittedUser = { ...newUser };

  const { data } = await api.post(`/user`, newEdittedUser);
  return data;
}

export async function forgotPassword(email) {
  const { data } = await api.post(`/user/forgot-password`, email);
  return data;
}

export const redefinePassword = async ({ token, newPassword }) => {
  const { data } = await api.put(`/user/forgot-password/${token}`, {
    newPassword,
  });

  return data;
};

// Sessões de usuário
export const login = async (credentials) => {
  const { setAuth } = useAuthStore.getState();

  const { data } = await api.post("/login", credentials);

  setAuth(data.accessToken);

  return data;
};

export const logout = async () => {
  const { clearAuth } = useAuthStore.getState();
  const { data } = await api.post("/logout");

  clearAuth();

  return data;
};

export async function refresh() {
  const { setAuth } = useAuthStore.getState();
  const { data } = await api.get("/refresh");

  setAuth(data.accessToken);

  return data;
}

// Arquivo
export async function getArchives(_id) {
  const { data } = await api.get(`/archive/${_id}`);
  return data;
}
