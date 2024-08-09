import {Palette} from "../colors/PaletteColors.ts"; // eslint-disable-next-line

// eslint-disable-next-line
const windowAsAny: any = window;
const indexedDB: IDBFactory =
  windowAsAny.indexedDB ||
  windowAsAny.mozIndexedDB ||
  windowAsAny.webkitIndexedDB ||
  windowAsAny.msIndexedDB ||
  windowAsAny.shimIndexedDB;

const palettesStoreName = "palettes";

const request = indexedDB.open("ColorPaletteDb", 1);

request.onsuccess = () => {
  request.result;
  console.log("DB opened successfully");
};

request.onerror = (event) => {
  console.error("Error occurred with IndexedDB", event);
};

request.onupgradeneeded = () => {
  const db = request.result;
  // keyPath is equivalent to primary key, unique number or string to refer to an entry
  const store = db.createObjectStore(palettesStoreName, {
    keyPath: "id",
    autoIncrement: true,
  });
  store.createIndex("palette_name", ["name"], {unique: true});
  console.log("DB Upgrade ran successfully");
};

export function addPalette(palette: Palette): Promise<void> {
  return new Promise((resolve, reject) => {
    const db = request.result;
    const transaction = db.transaction(palettesStoreName, "readwrite");
    const store = transaction.objectStore(palettesStoreName);

    // No need to specify an 'id' if you're using autoIncrement
    const addRequest = store.add(palette);

    transaction.oncomplete = function () {
      console.log(`Palette '${palette.name}' added successfully`);
      resolve();
    };

    transaction.onerror = function () {
      console.error(
        `An error occurred while adding palette '${palette.name}':`,
        addRequest.error?.message,
      );
      reject(addRequest.error);
    };
  });
}
