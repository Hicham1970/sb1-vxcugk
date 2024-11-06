import { useState, useEffect } from "react";
import { Trash2, Mail, CheckCircle } from "lucide-react";

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/messages", {
        credentials: "include",
      });
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des messages");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Une erreur est survenue"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleMarkAsRead = async (id: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/messages/${id}`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("Erreur lors de la mise à jour");

      setMessages(
        messages.map((msg) => (msg._id === id ? { ...msg, isRead: true } : msg))
      );
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce message ?"))
      return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/messages/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("Erreur lors de la suppression");

      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  if (isLoading) return <div className="text-center py-10">Chargement...</div>;
  if (error)
    return <div className="text-red-600 text-center py-10">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages reçus</h1>

      <div className="grid gap-6">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`bg-white rounded-lg shadow p-6 ${
              !message.isRead ? "border-l-4 border-blue-500" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {message.name}
                </h2>
                <a
                  href={`mailto:${message.email}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <Mail size={16} />
                  {message.email}
                </a>
              </div>
              <div className="flex gap-2">
                {!message.isRead && (
                  <button
                    onClick={() => handleMarkAsRead(message._id)}
                    className="text-green-600 hover:text-green-800"
                    title="Marquer comme lu"
                  >
                    <CheckCircle size={20} />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(message._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Supprimer"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            <p className="text-gray-600 whitespace-pre-wrap">
              {message.message}
            </p>

            <div className="mt-4 text-sm text-gray-500">
              Reçu le{" "}
              {new Date(message.createdAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}

        {messages.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            Aucun message reçu pour le moment
          </div>
        )}
      </div>
    </div>
  );
}
